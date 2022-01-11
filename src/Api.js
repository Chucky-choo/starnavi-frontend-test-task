export const getMode = async () => {
  try {
    let response = await fetch("http://demo1030918.mockable.io/");
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
