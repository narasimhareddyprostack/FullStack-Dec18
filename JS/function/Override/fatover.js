let x = () => {
  console.log("GM");
};

x();
x = () => {
  console.log("GA");
};

x();

/*
Adv of Fat Arrow : ()=>{}
1. cosice code
2. this keyword return empty {}
3. implicit return 

4. avoid fun overing conflict.
*/