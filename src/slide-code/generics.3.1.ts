/**
 * Imagine we want to search for
 * a person that has certain values
 */

interface Person {
  name: string;
  age: number;
  phone: string;
  car: {
    model: string;
    make: string;
    registrationNumber: string;
    manufacturing: {
      year: number;
      country: string;
      factory: string;
    };
  };
}

type PartialOf<O> = {
  [K in keyof O]?: O[K]
};

type PartialPerson = PartialOf<Person>;

const partial1: PartialPerson = {
  name: "Del Boy"
};

declare function findMatchingPeople(
  p: PartialPerson
): Person[];

const matches = findMatchingPeople(
  partial1
);

const partial2: PartialPerson = {
  car: {
    make: "TESLA"
  }
  // doesnt work
};
