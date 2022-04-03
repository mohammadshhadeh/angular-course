const user = {
    test: 'asdasd',
    aa() {
        console.log(this.test);
    }
}

setTimeout(user.aa(), 1000)
