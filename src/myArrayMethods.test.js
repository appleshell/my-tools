import Array from "./myForEach";

describe("test customize method of Array", () => {
  test("test my forEach", () => {
    const arr = [1, 2, 3];
    const res = [];

    arr.myForEach((i) => {
      res.push(i);
    });

    expect(res).toEqual([1, 2, 3]);
  });

  test("test my map", () => {
    const arr = [1, 2, 3];

    expect(arr.myMap((i) => i * 2)).toEqual([2, 4, 6]);
  });

  test("test my filter", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const filterRes = arr.myFilter((i) => i > 3);

    expect(filterRes).toEqual([4, 5, 6]);
  });

  test('test my some', () => {
    const arr = [1,2,3,4,5]

    expect(arr.mySome(i => i > 4)).toBe(true)
    expect(arr.mySome(i => i > 6)).toBe(false)
  })

  test('test my every', () => {
    const arr = [1,2,3,4,5]

    expect(arr.myEvery(i => i > 2)).toBe(false)
    expect(arr.myEvery(i => i > 0)).toBe(true)
  })

  test('test my reduce', () => {
    const arr = [1,2,3,4]

    const res = arr.myReduce((accu, item) => {
      return accu + item
    }, 0)

    expect(res).toBe(10)

    const resN = arr.myReduce((accu, item) => {
      return accu + item
    })

    expect(resN).toBe(10)

    const resA = arr.myReduce((accu, item) => {
      return [...accu, item * 2]
    }, [])

    expect(resA).toEqual([2,4,6,8])
  })
});
