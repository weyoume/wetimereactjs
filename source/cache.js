// This cache is used for tooltip date formatter.
// The same cache gives 20x performance boost
// for `javascript-time-ago` relative date/time formatters.
export default
{
	cache: {},

	get(...keys)
	{
		let cache = this.cache
		for (const key of keys)
		{
			if (typeof cache !== 'object')
			{
				return
			}
			cache = cache[key]
		}

		return cache
	},

	put(...keys)
	{
		const value = keys.pop()
		const last_key = keys.pop()

		let cache = this.cache
		for (const key of keys)
		{
			if (typeof cache[key] !== 'object')
			{
				cache[key] = {}
			}
			cache = cache[key]
		}

		return cache[last_key] = value
	}
}