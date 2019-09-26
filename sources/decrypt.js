
/**
 *
 */

const crypto = require(`crypto`)

/**
 *
 */

module.exports = (message, options) => {

	/**
	 *
	 */

	if (!message) {
		return message
	}

	/**
	 *
	 */

	if (message.constructor === Object) {
		return message
	}

	/**
	 *
	 */

	if (message.constructor === Array) {
		return message
	}

	/**
	 *
	 */

	const key = options.key
	const iv = Buffer.from(message.substr(0, 16), `base64`)
	const cipher = crypto.createDecipheriv(`aes256`, key, iv)

	/**
	 *
	 */

	const decoded = `${cipher.update(message.substr(16), `base64`, `utf8`)}${cipher.final(`utf8`)}`

	/**
	 *
	 */

	try {
		return JSON.parse(decoded)
	} catch (error) {
		return decoded
	}

}
