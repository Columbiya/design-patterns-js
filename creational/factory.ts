class SimpleMembership {
    private name: string
    cost: number

    constructor(name: string) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    private name: string
    cost: number

    constructor(name: string) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    private name: string
    cost: number

    constructor(name: string) {
        this.name = name
        this.cost = 500
    }
}

enum MembershipTypes {
    SIMPLE,
    STANDARD,
    PREMIUM
}

class MemberFactory {
    static list = {
        [MembershipTypes.SIMPLE]: SimpleMembership,
        [MembershipTypes.STANDARD]: StandardMembership,
        [MembershipTypes.PREMIUM]: PremiumMembership
    }

    static create(name: string, type: MembershipTypes) {
        return new MemberFactory.list[type](name)
    }
}