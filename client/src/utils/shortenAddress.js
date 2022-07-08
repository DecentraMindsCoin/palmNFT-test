// function that slices first 5 characters and last 4 of address

export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
