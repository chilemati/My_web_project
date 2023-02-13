const { atom } = require("recoil");

export const user = atom({
	key: "user",
	default: null,
});
export const level = atom({
	key: "level",
	default: "normal",
});
