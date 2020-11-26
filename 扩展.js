const arr1 = ["pc", "ipad", "e"];
const arr2 = [
  {
    id: 1,
    name: "pcs",
  },
  {
    id: 2,
    name: "pcs2",
  },
  {
    id: 3,
    name: "pcs3",
  },
];
const res = arr2.map((item) => {
  return arr1.map((it) => {
    return {
      id: item.id,
      name: item.name,
      china: it,
    };
  });
});
console.log("obj :>> ", res);