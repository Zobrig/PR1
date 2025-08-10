import { test } from "@playwright/test"
import { ProductsPage } from "./../page-objects/ProductsPage.js"
import { Navigation } from "./../page-objects/Navigation.js"

test("New user full end-to-end test journey", async ({ page }) => {
    const productPage = new ProductsPage(page)
    await productPage.visit()
    await productPage.addProductToBasket(0)
    await productPage.addProductToBasket(1)
    await productPage.addProductToBasket(2)
    const navigation = new Navigation(page)
    await navigation.goToCheckout()
    await page.pause()
}) 