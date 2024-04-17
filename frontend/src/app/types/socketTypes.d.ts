interface SocketConfig {
	url: string;
	listeners: { message: string; action: (payload: any) => any }[];
	subscribers: string[];
}

export { SocketConfig };
