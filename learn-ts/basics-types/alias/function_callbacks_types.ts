const fnCallback = (
	arr: string[],
	action: (str: string) => string
): string[] | void => {
	return arr.map(action);
};
