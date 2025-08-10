import { test, expect} from "@playwright/test"
import { Navigation } from "./../page-objects/Navigation.js"

export class ProductsPage {
    constructor(page) {
        this.page = page

        this.addButtons = page.locator('[data-qa="product-button"]')
    }

    visit = async () => {
        await this.page.goto("/")
    }

    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index)
        const navigation = new Navigation(this.page)
        const basketCountBeforAdding = await navigation.getBasketCount()

        await specificAddButton.waitFor()
        await expect(specificAddButton).toHaveText("Add to Basket")
        await specificAddButton.click()
        const basketCountAfterAdding = await navigation.getBasketCount()
        await expect(specificAddButton).toHaveText("Remove from Basket")
        await expect(basketCountAfterAdding).toBeGreaterThan(basketCountBeforAdding)
    }
}