class AwsServer {
    isAws?: boolean
    awsInfo?: () => string
}

class AzureServer {
    isAzure?: boolean
    azureInfo: () => string
}

class Server extends AwsServer {
    private ip: string
    port: number

    constructor(ip: string, port: number) {
        super()
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    } 
}

function aws(server: Server) {
    server.isAws = true
    server.awsInfo = function() {
        return this.url
    }

    return server
}

function azure(server: Server) {
    return server
}

const server = new Server("132.11.00.22", 8080)
const awsServer = aws(server)
console.log(awsServer.awsInfo && awsServer.awsInfo())