enum ROLES {
  ADMIN = "ADMIN",
  PUBLISHER = "PUBLISHER",
  GUEST = 23
}

// is not best practice to put type in intialization but here we do it for techong purposes
const person5: {
	name: string;
	age: number;
	role: ROLES;
} = {
	name: "anas jaidi",
	age: 20,
	role: ROLES.ADMIN,
};