export interface Bits {
	[key: string]: boolean
}

export class BitField {
	private map: Map<string, number> = new Map();

	set(key: string) {
		if (this.map.has(key)) return;

		this.map.set(key, 1 << this.map.size);
	}

	has(number: number, key: string): boolean {
		if (!this.map.has(key)) return false;

		const bit = this.map.get(key);
		return ((number & bit) === bit) as boolean;
	}

	all(number: number): Bits {
		const obj: Bits = {};
		this.map.forEach((bit: number, val: string) => {
			if ((number & bit) === bit) obj[val] = true;
			else obj[val] = false;
		});

		return obj;
	}

	get(key: string): number {
		return this.map.get(key);
	}

	number(bits: Bits) {
		let number = 0;
		Object.keys(bits).forEach((bitKey: string) => {
			if (!this.map.has(bitKey)) throw new Error("No Key found for " + bitKey);
			if (bits[bitKey]) number |= this.map.get(bitKey);
		});

		return number;
	}
}