function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    return "Vecteurs de longueurs différentes";
  }

  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

function orthogonal(v1, v2) {
  let ps = dot_product(v1, v2);
  return ps === 0;
}

function Dotprod(v1, v2) {
  let orthogonal_vect = false;

  if (orthogonal(v1, v2)) {
    orthogonal_vect = true;
  }

  return orthogonal_vect;
}
console.log(dot_product([2, 1], [5, 2]));
console.log(orthogonal([-2, 1], [-1, 2]));
console.log(Dotprod([2,1], [-1, 2]));
