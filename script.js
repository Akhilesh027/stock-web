document.addEventListener("DOMContentLoaded", function () {
    const stockDetails = document.getElementById("stock-details");
    const stockName = document.getElementById("stock-name");
    const stockPrice = document.getElementById("stock-price");
    const investmentDetails = document.getElementById("investment-details");
    const stockChartCanvas = document.getElementById("stock-chart").getContext("2d");

    let stockChart = null;

    window.showDetails = function (name, price, trendData) {
        stockName.textContent = name;
        stockPrice.textContent = `Current Price: ${price}`;
        investmentDetails.textContent = `Investment insights for ${name}...`;
        
        stockDetails.classList.remove("hidden");

        if (stockChart) {
            stockChart.destroy();
        }

        stockChart = new Chart(stockChartCanvas, {
            type: "line",
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Today"],
                datasets: [{
                    label: `${name} Price Trend`,
                    data: trendData,
                    borderColor: "#4caf50",
                    backgroundColor: "rgba(76, 175, 80, 0.2)",
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    };

    window.closeDetails = function () {
        stockDetails.classList.add("hidden");
    };
});
document.addEventListener("DOMContentLoaded", function () {
    window.showDetails = function (name, price, trendData) {
        const stockInfo = {
            name: name,
            price: price,
            trendData: trendData
        };
        // Convert object to a URL query string
        const queryString = new URLSearchParams(stockInfo).toString();
        // Redirect to details.html with stock data
        window.location.href = `details.html?${queryString}`;
    };
});
