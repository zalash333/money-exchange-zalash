// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let moneyBase = {
        H: 50, Q: 25, D: 10, N: 5, P: 1, error: "You are rich, my friend! We don't have so much coins for exchange"
    }
    let money = {}
    if (currency >= 10000) {
        money.error = moneyBase.error
        return money
    } else if (currency <= 0) {
        return money
    } else {
        let a = currency
        while(a>=0) {
            if (a >= moneyBase.H) {
                if (!money['H']) {
                    money['H'] = 0
                }
                a = a - moneyBase.H;
                money['H']++
            } else if (a >= moneyBase.Q) {
                if (!money['Q']) {
                    money['Q'] = 0
                }
                a = a - moneyBase.Q;
                money['Q']++
            } else if (a >= moneyBase.D) {
                if (!money['D']) {
                    money['D'] = 0
                }
                a = a - moneyBase.D;
                money['D']++
            } else if (a >= moneyBase.N) {
                if (!money['N']) {
                    money['N'] = 0
                }
                a = a - moneyBase.N;
                money['N']++
            } else if (a >= moneyBase.P) {
                if (!money['P']) {
                    money['P'] = 0
                }
                a = a - moneyBase.P;
                money['P']++
            } else if (!a) {
                return money
            }

        }
    }
}

