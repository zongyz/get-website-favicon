'use strict'

let orders = [{
	key: 'origin',
	rank: item => {
		const rule = [/^\/favicon.ico$/im, /<link/im, /<meta/im, /manifest.json/im].reverse()
		let rank = 0
		for (let n in rule) {
			rank += rule[n].test(item.origin) ? parseInt(n) : 0
		}
		return rank
	}
}, {
	key: 'ext',
	rank: item => {
		const rule = [/\.ico$/im, /\.png$/im, /\.jpg$/im, /\.svg$/im].reverse()
		let rank = 0
		for (let n in rule) {
			rank += rule[n].test(item.src) ? parseInt(n) : 0
		}
		return rank
	}
}, {
	key: 'sizes',
	rank: item => {
		let rank = 0
		if (!item.sizes) return rank
		const wh = item.sizes.split('x')
		const size = parseInt(wh[0])
		if (wh[0] != wh[1]) return rank
		if (size > 24 && size < 40) rank = 4
		else if (size > 36 && size < 90) rank = 3
		else if (size > 88 && size < 260) rank = 2
		else if (size > 15 && size < 26) rank = 1
		else rank = 0
		return rank
	}
}].reverse()


module.exports = item => {
	let k = 0
	for (let x in orders) {
		let order = orders[x]
		if (order.rank) {
			k += order.rank(item) * Math.pow(10, parseInt(x))
		}
	}
	return k
}