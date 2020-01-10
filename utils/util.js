export const initDateTime = () => `${new Date().toISOString().split('T')[0]} ${new Date().toTimeString().split(' ')[0]}`;

export const ok = (f) => {
  try {
    f();
  } catch (err) {
    console.log('error', err);
  }
};
