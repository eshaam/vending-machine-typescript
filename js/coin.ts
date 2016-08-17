class Quarter {
    private value: number = .25
    get Value() {
        return this.value
    }
    set Value(newValue: number) {
        this.value = newValue
    }
    getImageUrl (): string {
        return "img/Quarter.png"
    }
}