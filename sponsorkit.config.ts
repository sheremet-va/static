import personalConfig from './sponsorkit.personal.config'
import vitestConfig from './sponsorkit.vitest.config'

export default process.env.SPONSORS_VITEST ? vitestConfig : personalConfig
