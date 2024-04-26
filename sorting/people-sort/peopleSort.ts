type tPerson = {fname: string, lname: string};

/** Sort array of persons in place (lname > fname). Returns array. */

function peopleSort(arr: tPerson[]): tPerson[] {
  return arr.sort((a: tPerson, b: tPerson) => {
    const lNameA = a.lname.toLocaleLowerCase();
    const lFirstA = a.fname.toLocaleLowerCase();
    const lNameB = b.lname.toLocaleLowerCase();
    const lFirstB = b.fname.toLocaleLowerCase();

    if (lNameA !== lNameB) {
      return lNameA < lNameB ? -1 : 1;
    }

    return lFirstA < lFirstB ? -1 : 1;

  })
}

export { peopleSort };
