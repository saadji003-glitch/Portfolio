import React, { createContext, useContext, useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';

interface PhotoContextType {
  photoSrc: string | null;
  setPhoto: (dataUrl: string) => void;
  resetPhoto: () => void;
  hasPhoto: boolean;
  isCustomPhoto: boolean;
}

const PhotoContext = createContext<PhotoContextType>({
  photoSrc: null,
  setPhoto: () => {},
  resetPhoto: () => {},
  hasPhoto: false,
  isCustomPhoto: false,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoSrc, setPhotoSrcState] = useState<string | null>(() => {
    try {
      const cached = localStorage.getItem('saad_portfolio_photo');
      if (cached) return cached;
    } catch {
      // ignore
    }
    return personalDetails.photoUrl || '/profile.png';
  });

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'saad_portfolio_photo') {
        if (e.newValue) {
          setPhotoSrcState(e.newValue);
          setHasError(false);
        } else {
          setPhotoSrcState(personalDetails.photoUrl || '/profile.png');
        }
      }
    };

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      if (customEvent.detail) {
        setPhotoSrcState(customEvent.detail);
        setHasError(false);
      } else {
        setPhotoSrcState(personalDetails.photoUrl || '/profile.png');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('saad_photo_change', handleCustomChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('saad_photo_change', handleCustomChange);
    };
  }, []);

  const setPhoto = (dataUrl: string) => {
    setPhotoSrcState(dataUrl);
    setHasError(false);
    try {
      localStorage.setItem('saad_portfolio_photo', dataUrl);
    } catch {
      // Ignore storage error
    }
    window.dispatchEvent(new CustomEvent('saad_photo_change', { detail: dataUrl }));
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem('saad_portfolio_photo');
    } catch {
      // Ignore storage error
    }
    const fallback = personalDetails.photoUrl || '/profile.png';
    setPhotoSrcState(fallback);
    window.dispatchEvent(new CustomEvent('saad_photo_change', { detail: null }));
  };

  const isCustom = Boolean(photoSrc && (photoSrc.startsWith('data:') || photoSrc.startsWith('blob:')));
  const hasPhoto = Boolean(photoSrc && !hasError);

  return (
    <PhotoContext.Provider
      value={{
        photoSrc,
        setPhoto,
        resetPhoto,
        hasPhoto,
        isCustomPhoto: isCustom,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(PhotoContext);
