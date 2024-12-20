const wait = async (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export default { wait };
