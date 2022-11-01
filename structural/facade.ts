interface IComplaint {
    id: string
    customer: string
    reason: string
    text: string
}

class Complaints {
    static complaints: IComplaint[] = []

    reply(complaint: IComplaint): string {
        return ``
    }

    add(complaint: IComplaint) {
        Complaints.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply(complaint: IComplaint): string {
        return `Product ${complaint.id} ${complaint.customer} ${complaint.text}`
    }
}

class ServiceComplaints extends Complaints {
    reply(complaint: IComplaint): string {
        return `Service ${complaint.id} ${complaint.customer} ${complaint.text}`
    }
}

enum ComplaintsTypes {
    PRODUCT_COMPLAINT,
    SERVICE_COMPLAINT
}

class ComplaintRegistry {
    register(customer: string, reason: string, text: string, type: ComplaintsTypes) {
        const id = Date.now().toString()
        let complaint: ServiceComplaints | ProductComplaints

        switch (type) {
            case ComplaintsTypes.SERVICE_COMPLAINT:
                complaint = new ServiceComplaints()
                break;
            case ComplaintsTypes.PRODUCT_COMPLAINT:
                complaint = new ProductComplaints()
                break;
        }

        return complaint.add({customer, id, reason, text})
    }
}

const registry = new ComplaintRegistry()
console.log(registry.register("vlas", "asd", "asdasdasd", ComplaintsTypes.PRODUCT_COMPLAINT))
console.log(registry.register("vlas", "asd", "asdasdasd", ComplaintsTypes.SERVICE_COMPLAINT))