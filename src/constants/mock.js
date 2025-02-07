export const mockTimeSeriesData = {
  meta: {
    symbol: "AAPL",
    interval: "1min",
    currency: "USD",
    exchange_timezone: "America/New_York",
    exchange: "NASDAQ",
    mic_code: "XNAS",
    type: "Common Stock",
  },
  values: [
    {
      datetime: "2021-09-16 15:59:00",
      open: "148.73500",
      high: "148.86000",
      low: "148.73000",
      close: "148.85001",
      volume: "624277",
    },
    {
      datetime: "2021-09-16 15:58:00",
      open: "148.72000",
      high: "148.78000",
      low: "148.70000",
      close: "148.74001",
      volume: "274622",
    },
    {
      datetime: "2021-09-16 15:57:00",
      open: "148.77499",
      high: "148.79500",
      low: "148.71001",
      close: "148.72501",
      volume: "254725",
    },
    {
      datetime: "2021-09-16 15:56:00",
      open: "148.76500",
      high: "148.78999",
      low: "148.72000",
      close: "148.78000",
      volume: "230758",
    },
    {
      datetime: "2021-09-16 15:55:00",
      open: "148.80000",
      high: "148.80000",
      low: "148.70000",
      close: "148.76230",
      volume: "348577",
    },
  ],
  status: "ok",
};

export const mockStockList = [
  {
    symbol: "AAPL",
    name: "Apple Inc",
    currency: "USD",
    exchange: "NASDAQ",
    mic_code: "XNGS",
    country: "United States",
    type: "Common Stock",
    figi_code: "BBG000B9Y5X2",
  },
  {
    symbol: "AAT",
    name: "American Assets Trust Inc",
    currency: "USD",
    exchange: "NYSE",
    mic_code: "XNYS",
    country: "United States",
    type: "Real Estate Investment Trust (REIT)",
    figi_code: "BBG00161BCW4",
  },
];

export const mockStockQuote = {
  symbol: "AAPL",
  name: "Apple Inc",
  exchange: "NASDAQ",
  mic_code: "XNAS",
  currency: "USD",
  datetime: "2021-09-16",
  timestamp: 1631772000,
  open: "148.44000",
  high: "148.96840",
  low: "147.22099",
  close: "148.85001",
  volume: "67903927",
  previous_close: "149.09000",
  change: "-0.23999",
  percent_change: "-0.16097",
  average_volume: "83571571",
  rolling_1d_change: "123.123",
  rolling_7d_change: "123.123",
  rolling_period_change: "123.123",
  is_market_open: false,
  fifty_two_week: {
    low: "103.10000",
    high: "157.25999",
    low_change: "45.75001",
    high_change: "-8.40999",
    low_change_percent: "44.37440",
    high_change_percent: "-5.34782",
    range: "103.099998 - 157.259995",
  },
  extended_change: "0.09",
  extended_percent_change: "0.05",
  extended_price: "125.22",
  extended_timestamp: 1649845281,
};

export const mockMarketMoversData = {
  values: [
    {
      symbol: "BSET",
      name: "Bassett Furniture Industries Inc",
      exchange: "NASDAQ",
      mic_code: "XNAS",
      datetime: "2022-01-31 09:34:00",
      last: 17.25,
      high: 17.35,
      low: 15.90999,
      volume: 108297,
      change: 3.31,
      percent_change: 23.74462,
    },
    {
      symbol: "TWKS",
      name: "Thoughtworks Holding, Inc.",
      exchange: "NASDAQ",
      mic_code: "XNAS",
      datetime: "2022-01-31 09:34:40",
      last: 20.09,
      high: 19.62999,
      low: 18.29999,
      volume: 392376,
      change: 3.98,
      percent_change: 20.84861,
    },
    {
      symbol: "RMED",
      name: "RA Medical Systems Inc",
      exchange: "NYSE",
      mic_code: "XNAS",
      datetime: "2022-01-31 09:33:50",
      last: 0.984,
      high: 0.98519,
      low: 0.984,
      volume: 4480,
      change: 0.159,
      percent_change: 17.84511,
    },
  ],
  status: "ok",
};

export const mockRealTimePrice = {
  price: "200.99001",
};

export const mockQuateData = {
  c: 261.74,
  h: 263.31,
  l: 260.68,
  o: 261.07,
  pc: 259.45,
  t: 1582641000,
};
