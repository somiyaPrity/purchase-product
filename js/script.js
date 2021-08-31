// variable declare
let bestPrice = document.getElementById('best-cost');
let memoryCost = document.getElementById('memory-cost');
let storageCost = document.getElementById('storage-cost');
let deliveryCost = document.getElementById('delivery-cost');
let totalPriceDisplay = document.getElementById('total-price');
let finalCost = document.getElementById('total-cost');

// price dictribution and update
function costDistribution(chargeFor, price) {
  if (chargeFor == 'memory') {
    memoryCost.innerText = price;
  } else if (chargeFor == 'storage') {
    storageCost.innerText = price;
  } else if (chargeFor == 'delivery cost') {
    deliveryCost.innerText = price;
  }

  let totalPrice =
    parseInt(bestPrice.innerText) +
    parseInt(memoryCost.innerText) +
    parseInt(storageCost.innerText) +
    parseInt(deliveryCost.innerText);

  totalPriceDisplay.innerText = totalPrice;
  finalCost.innerText = totalPrice;
}
// promo code matching
function matchPromo() {
  let promoInput = document.getElementById('promo-input').value;
  if (promoInput == 'stevekaku') {
    if (finalCost.innerText == totalPriceDisplay.innerText) {
      let overallCost = parseInt(finalCost.innerText);
      let twentyPercent = (overallCost * 20) / 100;
      overallCost = overallCost - twentyPercent;
      finalCost.innerText = overallCost;
    } else {
      alert('you already applied the promo code');
    }
  } else {
    alert('Please apply the correct promo code');
  }
  document.getElementById('promo-input').value = '';
}
// memory
document
  .getElementById('eight-gb-memory')
  .addEventListener('click', function () {
    costDistribution('memory', 0);
  });
document
  .getElementById('sixteen-gb-memory')
  .addEventListener('click', function () {
    costDistribution('memory', 180);
  });
// storage
document.getElementById('storage-256').addEventListener('click', function () {
  costDistribution('storage', 0);
});

document.getElementById('storage-512').addEventListener('click', function () {
  costDistribution('storage', 100);
});

document.getElementById('storage-1TB').addEventListener('click', function () {
  costDistribution('storage', 180);
});

// delivery
document.getElementById('free-delivery').addEventListener('click', function () {
  costDistribution('delivery cost', 0);
});

document
  .getElementById('urgent-delivery')
  .addEventListener('click', function () {
    costDistribution('delivery cost', 20);
  });

//   apply promo
document.querySelector('.promo-btn').addEventListener('click', function () {
  matchPromo();
});
