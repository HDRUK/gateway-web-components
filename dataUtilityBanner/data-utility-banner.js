import {
	html,
	css,
	LitElement,
} from "https://unpkg.com/lit-element/lit-element.js?module";
import { unsafeHTML } from "https://unpkg.com/lit-html/directives/unsafe-html.js?module";
import {
	LitState,
	observeState,
} from "https://unpkg.com/lit-element-state@1.7.0/lit-state.js";

const CLOSE_SVG = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 409.806 409.806" style="enable-background:new 0 0 409.806 409.806" xml:space="preserve"><g>
  <g>
    <path fill="white" d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
    c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
    c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
    c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
    c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
  </g>
</g>
</svg>
`;

const FONT_FACES = `@font-face {
  font-family:"museo-sans-rounded";
  src:url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/491586/00000000000000003b9b1e2d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:300;
  }
  
  @font-face {
  font-family:"museo-sans-rounded";
  src:url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/9baf4a/00000000000000003b9b1e2f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:700;
  }
  
  @font-face {
  font-family:"museo-sans-rounded";
  src:url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/a03e49/00000000000000003b9b1e2e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:500;
  }`;

class LocalState extends LitState {
	static get stateVars() {
		return {
			show: true,
		};
	}
}
const localState = new LocalState();

class DataUtilityBanner extends observeState(LitElement) {
	static get styles() {
		return css`
			* {
				font-family: "museo-sans-rounded";
			}
			.banner {
				left: 0px;
				top: 0px;
				background: #29235c;
				padding: 15px 30px;
				display: flex;
				flex-direction: column;
				position: relative;
			}

			.banner__title {
				font-style: normal;
				font-size: 20px;
				line-height: 23px;
				color: #ffc40c;
				font-weight: bold;
			}

			.banner__title-container {
				margin-top: 5px;
				margin-bottom: 5px;
			}

			.banner__text-container {
				flex: 1;
				margin-bottom: 10px;
			}

			.banner__text {
				font-style: normal;
				font-weight: normal;
				font-size: 15px;
				line-height: 24px;
				color: #ffffff;
				font-weight: 300;
			}

			.banner__button {
				padding: 10px 16px;
				height: 34px;
				background: #eeeeee;
				border-radius: 4px;
				cursor: pointer;
				border: none;
				font-style: normal;
				font-weight: normal;
				font-size: 14px;
				line-height: 17px;
				color: #29235c;
			}

			.banner__button:hover {
				background: #d0d3d4;
			}

			svg {
				height: 14.828426361083984px;
				width: 14.828426361083984px;
			}

			.banner__close-icon {
				cursor: pointer;
				padding: 20px;
				position: absolute;
				right: 0px;
				top: 4px;
			}

			@media screen and (min-width: 768px) {
				.banner {
					flex-direction: row;
				}
				.banner__title-container {
					margin-right: 30px;
					margin-bottom: 0;
				}
				.banner__text-container {
					margin-right: 15px;
					margin-top: 5px;
					margin-bottom: 0;
				}
				.banner__button {
					margin-right: 30px;
				}
			}
		`;
	}
	static get properties() {
		return {
			bannerTitle: { type: String },
			bannerText: { type: String },
			bannerLinkText: { type: String },
			bannerExternalLink: { type: String },
		};
	}
	constructor() {
		super();
		this.floatRight = screen.width < 768 ? "" : "float-right";
		this.show = true;
	}

	async connectedCallback() {
		super.connectedCallback();
	}

	setupFontFaces() {
		if (document.querySelector('style[data-description="hdruk-font-faces"]')) {
			return;
		}
		const style = document.createElement("style");
		style.dataset.description = "hdruk-font-faces";
		style.appendChild(document.createTextNode(FONT_FACES));
		document.head.appendChild(style);
	}
	handleOnclick() {
		window.location.href = this.bannerExternalLink;
	}

	handleOnClose() {
		localState.show = false;
	}

	render() {
		this.setupFontFaces();
		return localState.show
			? html`
					<div class="banner">
						<div class="banner__title-container">
							<span class="banner__title">${this.bannerTitle} </span>
						</div>
						<div class="banner__text-container">
							<span class="banner__text">${this.bannerText}</span>
						</div>
						<div>
							<button
								type="button"
								class="banner__button"
								@click="${this.handleOnclick}"
								title="${this.bannerLinkText}"
							>
								${this.bannerLinkText}
							</button>

							<span class="banner__close-icon" @click="${this.handleOnClose}"
								>${unsafeHTML(CLOSE_SVG)}</span
							>
						</div>
					</div>
			  `
			: "";
	}
}

customElements.define("data-utility-banner", DataUtilityBanner);
