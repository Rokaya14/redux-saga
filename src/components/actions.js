export const AGE_UP = "age_up";
export const AGE_DOWN = "age_down";

//action  creator 
export const ageUp = () => ({
  type: AGE_UP,
  value: 1
})
export const ageDown = () => ({
  type: AGE_DOWN,
  value: 1
})