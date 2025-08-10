import { test, expect } from '@playwright/test';

test.skip("Product Page Add to Basket", async ({ page }) => {
  await page.goto("/")
  
  const addToBasketButton = page.locator('[data-qa="product-button"]').first()
  const busketCounter = page.locator('[data-qa="header-basket-count"]')
  const checkoutLink = page.getByRole('link', { name: 'Checkout' })

  await addToBasketButton.waitFor()
  await checkoutLink.waitFor()

  await expect(busketCounter).toHaveText("0")
  await addToBasketButton.click()
  await expect(addToBasketButton).toHaveText("Remove from Basket")
  await expect(busketCounter).toHaveText("1")

  await checkoutLink.click()
  await page.waitForURL("/basket")
  await page.pause()
})
