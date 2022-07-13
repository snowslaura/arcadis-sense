CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "userName" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,    
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "coordinates" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES users(id),
    "name" TEXT NOT NULL UNIQUE,
    "xCoordinate" INTEGER NOT NULL, 
   	"yCoordinate" INTEGER NOT NULL, 
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "kpi" (
    "id" SERIAL PRIMARY KEY,
    "coordinateId" INTEGER NOT NULL REFERENCES coordinates(id),    
    "aluminioDissolvido" FLOAT NOT NULL,
	"arsenioTotal" FLOAT NOT NULL,
	"chumboTotal" FLOAT NOT NULL,
	"cobreDissolvido" FLOAT NOT NULL,
	"escherichiaColi" INTEGER NOT NULL,
	"cromoTotal" FLOAT NOT NULL,
	"cadmioTotal" FLOAT NOT NULL,
	"dbo" INTEGER NOT NULL,
	"irregular" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);