import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import Webmentions from "./quartz/components/Webmentions"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout({
	defaults: {
		afterBody: [Webmentions],
	},
})
