async function addTwoPromises(promise1: P, promise2: P): Promise<number> {
    const [p1, p2] = await Promise.all([promise1, promise2])
    return p1+p2
};
