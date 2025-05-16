const FinancialIndicators = ({ stockQuotes }) => {
  return (
    <div className="financial-indicators">
      <div className="quotes-container">
        {stockQuotes.map((quote, index) => (
          <div key={index} className="quote">
            {quote.stockMarket 
              ? `${quote.asset} ${quote.stockMarket} ${quote.value} ${quote.trend}` 
              : `${quote.asset} ${quote.value} ${quote.trend}`
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialIndicators;