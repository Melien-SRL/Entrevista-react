export type Option = { id: string; label: string };

enum Nacionalidad {
  "argentino",
  "francés",
}

type ClientData = {
  clienteId: number;
  label: string;
  metadata: { [key: string]: any };
};

const data: ClientData[] = [
  {
    clienteId: 1,
    label: "Jorge Guzmán",
    metadata: { edad: 25, nacionalidad: Nacionalidad.argentino },
  },
  {
    clienteId: 2,
    label: "Roberto Gutierrez",
    metadata: { edad: 40, nacionalidad: Nacionalidad.argentino },
  },
  {
    clienteId: 3,
    label: "Esteban Prol",
    metadata: { edad: 50, nacionalidad: Nacionalidad.argentino },
  },
  {
    clienteId: 4,
    label: "Daniel García",
    metadata: { edad: 40, nacionalidad: Nacionalidad.argentino },
  },
  {
    clienteId: 5,
    label: "Pablo Codevila",
    metadata: { edad: 60, nacionalidad: Nacionalidad.argentino },
  },
  {
    clienteId: 6,
    label: "Mirko Marley",
    metadata: { edad: 12, nacionalidad: Nacionalidad.argentino },
  },
  {
    clienteId: 7,
    label: "Luisana Lopilato",
    metadata: { edad: 38, nacionalidad: Nacionalidad.argentino },
  },
  {
    clienteId: 8,
    label: "Michael Bublé",
    metadata: { edad: 45, nacionalidad: Nacionalidad.francés },
  },
];

export function fetchClientes(): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}
