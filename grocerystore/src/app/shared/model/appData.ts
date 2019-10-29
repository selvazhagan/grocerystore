export class AppData {
  customer: Customer;
  isLoggedIn: boolean;
}

export class Customer {
  name: Name;
}

export class Name {
  firstName: string;
  lastName: string;
}
