import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
})

const teams = [
    { id: 1, name: "Ferrari", base: "Milton Kaynes, United Kingdom" },
    { id: 2, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 3, name: "Mercedes", base: "Brackley, United Kindom" },
]

const drivers = [
    { id: 1, name: "Matheus Gonzaga", team: "Ferrari" },
    { id: 2, name: "Lewis Hamiltom", team: "McLaren" },
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
})

interface DriverParams {
    id: string,
}

server.get<{ Params: DriverParams }>("/driver/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);
    if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver Not Found" };
    }
    response.type("application/json").code(200);
    return { driver };
})

server.listen({ port: 3333 }, () => {
    console.log("Server Init");
});