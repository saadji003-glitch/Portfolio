import React, { useState } from 'react';
import { Terminal, Code, Check, Play, RefreshCw, ArrowRightLeft } from 'lucide-react';
import { projectsList } from '../data/portfolioData';

type UnitCategory = 'length' | 'weight' | 'temperature' | 'time';

interface ConversionOption {
  id: string;
  label: string;
  factor: number; // relative to base unit
  symbol: string;
}

const unitData: Record<UnitCategory, { name: string; baseUnit: string; units: ConversionOption[] }> = {
  length: {
    name: 'Length',
    baseUnit: 'Meter',
    units: [
      { id: 'm', label: 'Meters (m)', factor: 1, symbol: 'm' },
      { id: 'km', label: 'Kilometers (km)', factor: 1000, symbol: 'km' },
      { id: 'cm', label: 'Centimeters (cm)', factor: 0.01, symbol: 'cm' },
      { id: 'ft', label: 'Feet (ft)', factor: 0.3048, symbol: 'ft' },
      { id: 'inch', label: 'Inches (in)', factor: 0.0254, symbol: 'in' },
      { id: 'mile', label: 'Miles (mi)', factor: 1609.34, symbol: 'mi' },
    ],
  },
  weight: {
    name: 'Weight',
    baseUnit: 'Kilogram',
    units: [
      { id: 'kg', label: 'Kilograms (kg)', factor: 1, symbol: 'kg' },
      { id: 'g', label: 'Grams (g)', factor: 0.001, symbol: 'g' },
      { id: 'lb', label: 'Pounds (lbs)', factor: 0.453592, symbol: 'lbs' },
      { id: 'oz', label: 'Ounces (oz)', factor: 0.0283495, symbol: 'oz' },
    ],
  },
  temperature: {
    name: 'Temperature',
    baseUnit: 'Celsius',
    units: [
      { id: 'c', label: 'Celsius (°C)', factor: 1, symbol: '°C' },
      { id: 'f', label: 'Fahrenheit (°F)', factor: 1, symbol: '°F' },
      { id: 'k', label: 'Kelvin (K)', factor: 1, symbol: 'K' },
    ],
  },
  time: {
    name: 'Time',
    baseUnit: 'Seconds',
    units: [
      { id: 'sec', label: 'Seconds (s)', factor: 1, symbol: 's' },
      { id: 'min', label: 'Minutes (min)', factor: 60, symbol: 'min' },
      { id: 'hr', label: 'Hours (hr)', factor: 3600, symbol: 'hr' },
      { id: 'day', label: 'Days (days)', factor: 86400, symbol: 'day' },
    ],
  },
};

export const UnitConverterWidget: React.FC = () => {
  const [category, setCategory] = useState<UnitCategory>('length');
  const [val, setVal] = useState<number>(10);
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('ft');
  const [showCode, setShowCode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync default units when category changes
  const handleCategoryChange = (cat: UnitCategory) => {
    setCategory(cat);
    const units = unitData[cat].units;
    setFromUnit(units[0].id);
    setToUnit(units[1] ? units[1].id : units[0].id);
  };

  const currentCategoryData = unitData[category];

  const calculateResult = (): number => {
    if (isNaN(val)) return 0;
    if (category === 'temperature') {
      if (fromUnit === toUnit) return val;
      if (fromUnit === 'c' && toUnit === 'f') return (val * 9) / 5 + 32;
      if (fromUnit === 'c' && toUnit === 'k') return val + 273.15;
      if (fromUnit === 'f' && toUnit === 'c') return ((val - 32) * 5) / 9;
      if (fromUnit === 'f' && toUnit === 'k') return ((val - 32) * 5) / 9 + 273.15;
      if (fromUnit === 'k' && toUnit === 'c') return val - 273.15;
      if (fromUnit === 'k' && toUnit === 'f') return ((val - 273.15) * 9) / 5 + 32;
      return val;
    }

    const fromFactor = currentCategoryData.units.find((u) => u.id === fromUnit)?.factor || 1;
    const toFactor = currentCategoryData.units.find((u) => u.id === toUnit)?.factor || 1;
    const inBase = val * fromFactor;
    return inBase / toFactor;
  };

  const result = calculateResult();
  const fromObj = currentCategoryData.units.find((u) => u.id === fromUnit);
  const toObj = currentCategoryData.units.find((u) => u.id === toUnit);

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const cProject = projectsList[0];

  const handleCopyCode = () => {
    if (cProject.codeSnippet) {
      navigator.clipboard.writeText(cProject.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Interactive C Unit Converter Demo
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Live C Simulator
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Simulating Saad's C switch-case & menu-driven conversion logic
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCode(!showCode)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
        >
          <Code className="w-4 h-4 text-cyan-400" />
          {showCode ? 'View Interactive UI' : 'View C Source Code'}
        </button>
      </div>

      {!showCode ? (
        <div className="mt-6 space-y-6">
          {/* Category tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(Object.keys(unitData) as UnitCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all capitalize border text-center cursor-pointer ${
                  category === cat
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/10 font-bold'
                    : 'bg-slate-800/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {unitData[cat].name}
              </button>
            ))}
          </div>

          {/* Converter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
            {/* Input Value */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="text-xs font-mono text-slate-400">Enter Value:</label>
              <input
                type="number"
                value={val}
                onChange={(e) => setVal(parseFloat(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white font-mono text-lg focus:outline-none focus:border-cyan-500 transition-all"
                placeholder="0"
              />
            </div>

            {/* From Unit */}
            <div className="md:col-span-3 space-y-1.5">
              <label className="text-xs font-mono text-slate-400">From:</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-200 text-xs font-medium focus:outline-none focus:border-cyan-500 transition-all"
              >
                {currentCategoryData.units.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="md:col-span-1 flex justify-center pt-2 md:pt-4">
              <button
                onClick={swapUnits}
                title="Swap Units"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-all cursor-pointer"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            </div>

            {/* To Unit */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="text-xs font-mono text-slate-400">To:</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-slate-200 text-xs font-medium focus:outline-none focus:border-cyan-500 transition-all"
              >
                {currentCategoryData.units.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Terminal Output Simulation */}
          <div className="bg-black/90 rounded-xl border border-slate-800 p-4 font-mono text-xs overflow-x-auto shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-500 text-[11px]">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                <span className="ml-2 text-slate-400">c_unit_converter.exe</span>
              </span>
              <span className="text-slate-500">gcc -o converter main.c</span>
            </div>

            <div className="space-y-1 text-slate-300">
              <p className="text-cyan-400">$ ./converter</p>
              <p className="text-slate-400">Select Conversion Category: [{unitData[category].name}]</p>
              <p className="text-slate-400">
                Input Value: <span className="text-amber-400">{val || 0}</span> {fromObj?.symbol}
              </p>
              <div className="my-2 p-2.5 bg-cyan-950/40 border border-cyan-800/40 rounded text-cyan-200 font-bold text-sm flex items-center justify-between">
                <span>CONVERSION RESULT:</span>
                <span className="text-emerald-400">
                  {val || 0} {fromObj?.symbol} = {result.toFixed(4)} {toObj?.symbol}
                </span>
              </div>
              <p className="text-slate-500 text-[11px]">
                [SUCCESS] Conversion calculated with floating-point precision in C language.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between bg-slate-950 px-4 py-2 rounded-t-xl border border-slate-800 text-xs font-mono text-slate-400">
            <span>unit_converter.c</span>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Code className="w-3.5 h-3.5 text-cyan-400" />}
              {copied ? 'Copied C Code!' : 'Copy C Source Code'}
            </button>
          </div>
          <pre className="bg-slate-950 p-4 rounded-b-xl border border-t-0 border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto max-h-80 scrollbar-thin">
            <code>{cProject.codeSnippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
