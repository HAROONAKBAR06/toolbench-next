// Real conversion factors, each unit expressed relative to a base unit
// within its category. Temperature isn't purely multiplicative, so it
// uses dedicated conversion logic below.
//
// Every unit carries an explicit `slug` used to build clean URLs like
// /convert/miles-to-kilometers.

export const CATEGORIES = {
  length: {
    label: "Length",
    base: "meters",
    icon: "ruler",
    units: {
      millimeters:    { label: "Millimeters",    short: "mm",  slug: "millimeters",     factor: 0.001 },
      centimeters:    { label: "Centimeters",    short: "cm",  slug: "centimeters",     factor: 0.01 },
      meters:         { label: "Meters",         short: "m",   slug: "meters",          factor: 1 },
      kilometers:     { label: "Kilometers",     short: "km",  slug: "kilometers",      factor: 1000 },
      inches:         { label: "Inches",         short: "in",  slug: "inches",          factor: 0.0254 },
      feet:           { label: "Feet",           short: "ft",  slug: "feet",            factor: 0.3048 },
      yards:          { label: "Yards",          short: "yd",  slug: "yards",           factor: 0.9144 },
      miles:          { label: "Miles",          short: "mi",  slug: "miles",           factor: 1609.344 },
      nauticalmiles:  { label: "Nautical Miles", short: "nmi", slug: "nautical-miles",  factor: 1852 },
    },
  },
  weight: {
    label: "Weight & Mass",
    base: "kilograms",
    icon: "weight",
    units: {
      milligrams: { label: "Milligrams",  short: "mg", slug: "milligrams",  factor: 0.000001 },
      grams:      { label: "Grams",       short: "g",  slug: "grams",       factor: 0.001 },
      kilograms:  { label: "Kilograms",   short: "kg", slug: "kilograms",   factor: 1 },
      metrictons: { label: "Metric Tons", short: "t",  slug: "metric-tons", factor: 1000 },
      ounces:     { label: "Ounces",      short: "oz", slug: "ounces",      factor: 0.0283495 },
      pounds:     { label: "Pounds",      short: "lb", slug: "pounds",      factor: 0.453592 },
      stones:     { label: "Stones",      short: "st", slug: "stones",      factor: 6.35029 },
    },
  },
  temperature: {
    label: "Temperature",
    base: "celsius",
    icon: "thermometer",
    special: true,
    units: {
      celsius:    { label: "Celsius",    short: "°C", slug: "celsius" },
      fahrenheit: { label: "Fahrenheit", short: "°F", slug: "fahrenheit" },
      kelvin:     { label: "Kelvin",     short: "K",  slug: "kelvin" },
    },
  },
  volume: {
    label: "Volume",
    base: "liters",
    icon: "beaker",
    units: {
      milliliters:  { label: "Milliliters",       short: "mL",   slug: "milliliters",  factor: 0.001 },
      liters:       { label: "Liters",            short: "L",    slug: "liters",       factor: 1 },
      cubicmeters:  { label: "Cubic Meters",      short: "m³",   slug: "cubic-meters", factor: 1000 },
      teaspoons:    { label: "Teaspoons",         short: "tsp",  slug: "teaspoons",    factor: 0.00492892 },
      tablespoons:  { label: "Tablespoons",       short: "tbsp", slug: "tablespoons",  factor: 0.0147868 },
      cups:         { label: "Cups (US)",         short: "cup",  slug: "cups",         factor: 0.236588 },
      fluidounces:  { label: "Fluid Ounces (US)", short: "fl oz", slug: "fluid-ounces", factor: 0.0295735 },
      pints:        { label: "Pints (US)",        short: "pt",   slug: "pints",        factor: 0.473176 },
      quarts:       { label: "Quarts (US)",       short: "qt",   slug: "quarts",       factor: 0.946353 },
      gallons:      { label: "Gallons (US)",      short: "gal",  slug: "gallons",      factor: 3.78541 },
    },
  },
  area: {
    label: "Area",
    base: "squaremeters",
    icon: "square",
    units: {
      squaremillimeters: { label: "Square Millimeters", short: "mm²", slug: "square-millimeters", factor: 0.000001 },
      squarecentimeters: { label: "Square Centimeters", short: "cm²", slug: "square-centimeters", factor: 0.0001 },
      squaremeters:      { label: "Square Meters",      short: "m²",  slug: "square-meters",      factor: 1 },
      squarekilometers:  { label: "Square Kilometers",  short: "km²", slug: "square-kilometers",  factor: 1000000 },
      squarefeet:        { label: "Square Feet",        short: "ft²", slug: "square-feet",        factor: 0.092903 },
      squareyards:       { label: "Square Yards",       short: "yd²", slug: "square-yards",       factor: 0.836127 },
      squaremiles:       { label: "Square Miles",       short: "mi²", slug: "square-miles",       factor: 2589988.11 },
      acres:             { label: "Acres",              short: "ac",  slug: "acres",              factor: 4046.86 },
      hectares:          { label: "Hectares",           short: "ha",  slug: "hectares",           factor: 10000 },
    },
  },
  speed: {
    label: "Speed",
    base: "meterspersecond",
    icon: "gauge",
    units: {
      meterspersecond:   { label: "Meters per Second",   short: "m/s",  slug: "meters-per-second",    factor: 1 },
      kilometersperhour: { label: "Kilometers per Hour", short: "km/h", slug: "kilometers-per-hour",  factor: 0.277778 },
      milesperhour:      { label: "Miles per Hour",      short: "mph",  slug: "miles-per-hour",       factor: 0.44704 },
      knots:             { label: "Knots",               short: "kn",   slug: "knots",                factor: 0.514444 },
      feetpersecond:     { label: "Feet per Second",     short: "ft/s", slug: "feet-per-second",      factor: 0.3048 },
    },
  },
  time: {
    label: "Time",
    base: "seconds",
    icon: "clock",
    units: {
      milliseconds: { label: "Milliseconds", short: "ms",  slug: "milliseconds", factor: 0.001 },
      seconds:      { label: "Seconds",      short: "sec", slug: "seconds",      factor: 1 },
      minutes:      { label: "Minutes",      short: "min", slug: "minutes",      factor: 60 },
      hours:        { label: "Hours",        short: "hr",  slug: "hours",        factor: 3600 },
      days:         { label: "Days",         short: "day", slug: "days",         factor: 86400 },
      weeks:        { label: "Weeks",        short: "wk",  slug: "weeks",        factor: 604800 },
      months:       { label: "Months",       short: "mo",  slug: "months",       factor: 2629800 },
      years:        { label: "Years",        short: "yr",  slug: "years",        factor: 31557600 },
    },
  },
  data: {
    label: "Data Storage",
    base: "bytes",
    icon: "database",
    units: {
      bits:      { label: "Bits",      short: "bit", slug: "bits",      factor: 0.125 },
      bytes:     { label: "Bytes",     short: "B",   slug: "bytes",     factor: 1 },
      kilobytes: { label: "Kilobytes", short: "KB",  slug: "kilobytes", factor: 1024 },
      megabytes: { label: "Megabytes", short: "MB",  slug: "megabytes", factor: 1048576 },
      gigabytes: { label: "Gigabytes", short: "GB",  slug: "gigabytes", factor: 1073741824 },
      terabytes: { label: "Terabytes", short: "TB",  slug: "terabytes", factor: 1099511627776 },
    },
  },
  pressure: {
    label: "Pressure",
    base: "pascals",
    icon: "gauge",
    units: {
      pascals:     { label: "Pascals",      short: "Pa",  slug: "pascals",     factor: 1 },
      kilopascals: { label: "Kilopascals",  short: "kPa", slug: "kilopascals", factor: 1000 },
      bar:         { label: "Bar",          short: "bar", slug: "bar",         factor: 100000 },
      psi:         { label: "PSI",          short: "psi", slug: "psi",         factor: 6894.76 },
      atm:         { label: "Atmospheres",  short: "atm", slug: "atmospheres", factor: 101325 },
    },
  },
  energy: {
    label: "Energy",
    base: "joules",
    icon: "bolt",
    units: {
      joules:        { label: "Joules",         short: "J",   slug: "joules",         factor: 1 },
      kilojoules:    { label: "Kilojoules",     short: "kJ",  slug: "kilojoules",     factor: 1000 },
      calories:      { label: "Calories",       short: "cal", slug: "calories",       factor: 4.184 },
      kilocalories:  { label: "Kilocalories",   short: "kcal", slug: "kilocalories",  factor: 4184 },
      watthours:     { label: "Watt-hours",     short: "Wh",  slug: "watt-hours",     factor: 3600 },
      kilowatthours: { label: "Kilowatt-hours", short: "kWh", slug: "kilowatt-hours", factor: 3600000 },
    },
  },
  angle: {
    label: "Angle",
    base: "degrees",
    icon: "angle",
    units: {
      degrees:  { label: "Degrees",  short: "deg",  slug: "degrees",  factor: 1 },
      radians:  { label: "Radians",  short: "rad",  slug: "radians",  factor: 57.29578 },
      gradians: { label: "Gradians", short: "grad", slug: "gradians", factor: 0.9 },
    },
  },
  power: {
    label: "Power",
    base: "watts",
    icon: "bolt",
    units: {
      watts:      { label: "Watts",      short: "W",  slug: "watts",      factor: 1 },
      kilowatts:  { label: "Kilowatts",  short: "kW", slug: "kilowatts",  factor: 1000 },
      horsepower: { label: "Horsepower", short: "hp", slug: "horsepower", factor: 745.7 },
      megawatts:  { label: "Megawatts",  short: "MW", slug: "megawatts",  factor: 1000000 },
    },
  },
};

export function convertValue(category, fromUnit, toUnit, value) {
  const cat = CATEGORIES[category];
  if (!cat) return null;
  if (cat.special && category === "temperature") {
    return convertTemperature(fromUnit, toUnit, value);
  }
  const from = cat.units[fromUnit];
  const to = cat.units[toUnit];
  if (!from || !to) return null;
  const base = value * from.factor;
  return base / to.factor;
}

function convertTemperature(from, to, value) {
  let celsius;
  if (from === "celsius") celsius = value;
  else if (from === "fahrenheit") celsius = (value - 32) * (5 / 9);
  else if (from === "kelvin") celsius = value - 273.15;
  else return null;

  if (to === "celsius") return celsius;
  if (to === "fahrenheit") return celsius * (9 / 5) + 32;
  if (to === "kelvin") return celsius + 273.15;
  return null;
}
