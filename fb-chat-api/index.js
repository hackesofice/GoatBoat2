"use strict";

const utils = require("./utils");
const log = require("npmlog");

const checkVerified = null;

const defaultLogRecordSize = 100;
log.maxRecordSize = defaultLogRecordSize;


// Added the 'postToStory' function
function postToStory(api, ctx, attachmentID, message, callback) {
    api.uploadAttachment(attachmentID, (err, attachmentID) => {
        if (err) {
            log.error("postToStory", "Error uploading attachment:", err);
            return callback(err);
        }

        const form = {
            'composer_session_id': ctx.clientID,
            'profile_id': ctx.userID,
            'attachment_id': attachmentID,
            'status': message,
            'is_explicit_place': false,
            'composertags_place': '',
            'feed_target_type': 292887124149776,
            'xhpc_context': 'home',
            'xhpc_ismeta': 1,
            'xhpc_timeline': '',
            'xhpc_composerid': 'rc.u_ps_json',
            'xhpc_publish_type': 1,
            'og_suggestion_mechanism': '',
            'og_suggestion_logging_data': '',
            'og_suggestion_type': '',
            'og_composer_type': 'self_composer',
            'og_analytics_label': '',
            'og_author': '',
            'referrer': 'group_composer',
            'attach_place_suggestion': false,
            'attach_media_type_suggestion': false,
            'attach_attribution_suggestion': false,
            'attach_marketplace_suggestion': false,
            'attach_media_suggestion': false,
            'composer_predicted_city': '',
            'composer_predicted_latitude': 0,
            'composer_predicted_longitude': 0,
            'composer_session_duration': 0,
            'composer_session_metrics': '',
            'timezone_offset': -300,
            'check_hash': 0,
            'privacyx': '',
            'attachments[0][has_chaining]': '',
            'attachments[0][subattachments][0][question_id]': '',
            'comment_time': 0,
            'comment_redirection_info': '',
            'feed_relevance_model_backed': 0,
            'source': 10,
            'xhpc_rosetta_block_id': '',
            'xhpc_publish_source': '',
            'xhpc_collapsed': '',
            'xhpc_aggregated_story': '',
            'xhpc_feed_info': '',
            'xhpc_sprouts_type': 1,
            'og_channel_id': '',
            'og_entry_point': 'page_timeline',
            'og_entity_id': '',
            'og_target_id': ctx.userID,
            'og_feed_target_type': 292887124149776,
            'og_suggestion_ranking_flow': '',
            'og_suggestion_logging_data_version': 2,
            'og_suggestion_ranking_id': '',
            'xhpc_composerid_new': 'rc.u_ps_json',
            'xhpc_targetid': '',
            'xhpc_message_text': message,
            'xhpc_message': message,
            'xhpc_message_rich': '',
            'xhpc_message_tags': '',
            'xhpc_message_tag_text': '',
            'og_type': '',
            'og_headline': '',
            'og_suggestion_id': '',
            'og_suggestion_logging_data_version': '',
            'og_suggestion_overlapping_tokenized_payload': '',
            'og_composer_hash': '',
            'og_attributions': '',
            'og_legacy_attribution': '',
            'og_lqfb': '',
            'og_composer_input_type': 0,
            'og_composer_entry_picker_work': 'com.facebook.composer.entry.EntryPickerWorkDefault',
            'og_composer_entry_picker_icon_work': 'com.facebook.composer.entry.EntryPickerIconWorkDefault',
            'og_composer_target_picker_work': 'com.facebook.composer.target.TargetPickerWorkDefault',
            'og_composer_entry_picker_waterfall_id': '',
            'og_composer_entry_picker_waterfall_source': '',
            'og_composer_entry_picker_entry_point': '',
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_target_picker_session_id': ctx.clientID,
            'og_composer_session_id': ctx.clientID,
            'comet_layout_type': '',
            'xc_message': '',
            'viewas_chaining_token': '',
            'viewas_chaining_profile_id': '',
            'comet_info': '',
            'xhpc_target_id_data': '',
            'comet_placeholder_text': '',
            'comet_surface': '',
            'feed_using_composer_entry_picker': false,
            'is_forced_reshare_of_post': false,
            'comet_info_type': 0,
            'og_composer_session_data': '7qrYXbx5iwsr0z16gqsSyA',
            'composer_focus_status': 0,
            'og_composer_entry_picker_work': 'com.facebook.composer.entry.EntryPickerWorkDefault',
            'og_composer_entry_picker_session': ctx.clientID,
            'og_composer_target_picker_work': 'com.facebook.composer.target.TargetPickerWorkDefault',
            'og_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'og_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'og_composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'xhpc_composerid_entrypoint': 'composer_cli',
            'is_forced_reshare_of_story': false,
            'composer_entry_picker_waterfall_id': '',
            'composer_entry_picker_waterfall_source': '',
            'composer_entry_picker_entry_point': '',
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_session_request_type': 'insert',
            'comet_fbid': '',
            'xhpc_composer_entry_picker_work': 'com.facebook.composer.entry.EntryPickerWorkDefault',
            'xhpc_composer_entry_picker_icon_work': 'com.facebook.composer.entry.EntryPickerIconWorkDefault',
            'xhpc_composer_target_picker_work': 'com.facebook.composer.target.TargetPickerWorkDefault',
            'xhpc_composer_entry_picker_waterfall_id': '',
            'xhpc_composer_entry_picker_waterfall_source': '',
            'xhpc_composer_entry_picker_entry_point': '',
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_session': ctx.clientID,
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_work_factory':
                'com.facebook.composer.entry.EntryPickerIconWorkDefault',
            'xhpc_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'xhpc_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'xhpc_composer_target_picker_work_factory': 'com.facebook.composer.target.target',
            
                        'xhpc_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'xhpc_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'xhpc_composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'og_composer_entry_picker_waterfall_id': '',
            'og_composer_entry_picker_waterfall_source': '',
            'og_composer_entry_picker_entry_point': '',
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_entry_picker_session': ctx.clientID,
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'og_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'og_composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_entry_picker_work': 'com.facebook.composer.entry.EntryPickerWorkDefault',
            'og_composer_entry_picker_icon_work': 'com.facebook.composer.entry.EntryPickerIconWorkDefault',
            'og_composer_target_picker_work': 'com.facebook.composer.target.TargetPickerWorkDefault',
            'og_composer_session_id_entrypoint': 'composer_cli',
            'og_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'og_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'og_composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'og_composer_entry_picker_waterfall_id': '',
            'og_composer_entry_picker_waterfall_source': '',
            'og_composer_entry_picker_entry_point': '',
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_entry_picker_session': ctx.clientID,
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_entry_picker_session_id': ctx.clientID,
            'og_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'og_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'og_composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'composer_entry_picker_waterfall_id': '',
            'composer_entry_picker_waterfall_source': '',
            'composer_entry_picker_entry_point': '',
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_session': ctx.clientID,
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'composer_session_request_type': 'insert',
            'comet_fbid': '',
            'xhpc_composer_entry_picker_work': 'com.facebook.composer.entry.EntryPickerWorkDefault',
            'xhpc_composer_entry_picker_icon_work': 'com.facebook.composer.entry.EntryPickerIconWorkDefault',
            'xhpc_composer_target_picker_work': 'com.facebook.composer.target.TargetPickerWorkDefault',
            'xhpc_composer_entry_picker_waterfall_id': '',
            'xhpc_composer_entry_picker_waterfall_source': '',
            'xhpc_composer_entry_picker_entry_point': '',
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_session': ctx.clientID,
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'xhpc_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'xhpc_composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'composer_entry_picker_waterfall_id': '',
            'composer_entry_picker_waterfall_source': '',
            'composer_entry_picker_entry_point': '',
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_session': ctx.clientID,
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'composer_session_request_type': 'insert',
            'comet_fbid': '',
            'xhpc_composer_entry_picker_work': 'com.facebook.composer.entry.EntryPickerWorkDefault',
            'xhpc_composer_entry_picker_icon_work': 'com.facebook.composer.entry.EntryPickerIconWorkDefault',
            'xhpc_composer_target_picker_work': 'com.facebook.composer.target.TargetPickerWorkDefault',
            'xhpc_composer_entry_picker_waterfall_id': '',
            'xhpc_composer_entry_picker_waterfall_source': '',
            'xhpc_composer_entry_picker_entry_point': '',
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_session': ctx.clientID,
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_session_id': ctx.clientID,
            'xhpc_composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'xhpc_composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'xhpc_composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
            'composer_entry_picker_waterfall_id': '',
            'composer_entry_picker_waterfall_source': '',
            'composer_entry_picker_entry_point': '',
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_session': ctx.clientID,
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_session_id': ctx.clientID,
            'composer_entry_picker_work_factory': 'com.facebook.composer.entry.EntryPickerWorkDefault.Factory',
            'composer_entry_picker_icon_work_factory': 'com.facebook.composer.entry.EntryPickerIconWorkDefault.Factory',
            'composer_target_picker_work_factory': 'com.facebook.composer.target.TargetPickerWorkDefault.Factory',
        };

        api.httpPost('https://www.facebook.com/composer/ocelot/async_loader/?publisher=feed', form, (err, res) => {
            if (err) {
                log.error("postToStory", "Error posting to story:", err);
                return callback(err);
            }

            try {
                const result = JSON.parse(res.body.slice(9)); // Removing the "for (;;);" prefix
                if (result.error) {
                    log.error("postToStory", "Error posting to story:", result.error);
                    return callback(result.error);
                }
                log.info("postToStory", "Posted to story successfully.");
                callback(null);
            } catch (e) {
                log.error("postToStory", "Error parsing response:", e);
                callback(e);
            }
        });
    });
}


function setOptions(globalOptions, options) {
	Object.keys(options).map(function (key) {
		switch (key) {
			case 'online':
				globalOptions.online = Boolean(options.online);
				break;
			case 'logLevel':
				log.level = options.logLevel;
				globalOptions.logLevel = options.logLevel;
				break;
			case 'logRecordSize': 
				log.maxRecordSize = options.logRecordSize;
				globalOptions.logRecordSize = options.logRecordSize;
				break;
			case 'selfListen':
				globalOptions.selfListen = Boolean(options.selfListen);
				break;
			case 'selfListenEvent':
				globalOptions.selfListenEvent = options.selfListenEvent;
				break;
			case 'listenEvents':
				globalOptions.listenEvents = Boolean(options.listenEvents);
				break;
			case 'pageID':
				globalOptions.pageID = options.pageID.toString();
				break;
			case 'updatePresence':
				globalOptions.updatePresence = Boolean(options.updatePresence);
				break;
			case 'forceLogin':
				globalOptions.forceLogin = Boolean(options.forceLogin);
				break;
			case 'userAgent':
				globalOptions.userAgent = options.userAgent;
				break;
			case 'autoMarkDelivery':
				globalOptions.autoMarkDelivery = Boolean(options.autoMarkDelivery);
				break;
			case 'autoMarkRead':
				globalOptions.autoMarkRead = Boolean(options.autoMarkRead);
				break;
			case 'listenTyping':
				globalOptions.listenTyping = Boolean(options.listenTyping);
				break;
			case 'proxy':
				if (typeof options.proxy != "string") {
					delete globalOptions.proxy;
					utils.setProxy();
				} else {
					globalOptions.proxy = options.proxy;
					utils.setProxy(globalOptions.proxy);
				}
				break;
			case 'autoReconnect':
				globalOptions.autoReconnect = Boolean(options.autoReconnect);
				break;
			case 'emitReady':
				globalOptions.emitReady = Boolean(options.emitReady);
				break;
			default:
				log.warn("setOptions", "Unrecognized option given to setOptions: " + key);
				break;
		}
	});
}

function buildAPI(globalOptions, html, jar) {
	const maybeCookie = jar.getCookies("https://www.facebook.com").filter(function (val) {
		return val.cookieString().split("=")[0] === "c_user";
	});

	const objCookie = jar.getCookies("https://www.facebook.com").reduce(function (obj, val) {
		obj[val.cookieString().split("=")[0]] = val.cookieString().split("=")[1];
		return obj;
	}, {});

	if (maybeCookie.length === 0) {
		throw { error: "Error retrieving userID. This can be caused by a lot of things, including getting blocked by Facebook for logging in from an unknown location. Try logging in with a browser to verify." };
	}

	if (html.indexOf("/checkpoint/block/?next") > -1) {
		log.warn("login", "Checkpoint detected. Please log in with a browser to verify.");
	}

	const userID = maybeCookie[0].cookieString().split("=")[1].toString();
	const i_userID = objCookie.i_user || null;
	log.info("login", `Logged in as ${userID}`);

	try {
		clearInterval(checkVerified);
	} catch (_) { }

	const clientID = (Math.random() * 2147483648 | 0).toString(16);


	const oldFBMQTTMatch = html.match(/irisSeqID:"(.+?)",appID:219994525426954,endpoint:"(.+?)"/);
	let mqttEndpoint = null;
	let region = null;
	let irisSeqID = null;
	let noMqttData = null;

	if (oldFBMQTTMatch) {
		irisSeqID = oldFBMQTTMatch[1];
		mqttEndpoint = oldFBMQTTMatch[2];
		region = new URL(mqttEndpoint).searchParams.get("region").toUpperCase();
		log.info("login", `Got this account's message region: ${region}`);
	} else {
		const newFBMQTTMatch = html.match(/{"app_id":"219994525426954","endpoint":"(.+?)","iris_seq_id":"(.+?)"}/);
		if (newFBMQTTMatch) {
			irisSeqID = newFBMQTTMatch[2];
			mqttEndpoint = newFBMQTTMatch[1].replace(/\\\//g, "/");
			region = new URL(mqttEndpoint).searchParams.get("region").toUpperCase();
			log.info("login", `Got this account's message region: ${region}`);
		} else {
			const legacyFBMQTTMatch = html.match(/(\["MqttWebConfig",\[\],{fbid:")(.+?)(",appID:219994525426954,endpoint:")(.+?)(",pollingEndpoint:")(.+?)(3790])/);
			if (legacyFBMQTTMatch) {
				mqttEndpoint = legacyFBMQTTMatch[4];
				region = new URL(mqttEndpoint).searchParams.get("region").toUpperCase();
				log.warn("login", `Cannot get sequence ID with new RegExp. Fallback to old RegExp (without seqID)...`);
				log.info("login", `Got this account's message region: ${region}`);
				log.info("login", `[Unused] Polling endpoint: ${legacyFBMQTTMatch[6]}`);
			} else {
				log.warn("login", "Cannot get MQTT region & sequence ID.");
				noMqttData = html;
			}
		}
	}

	// All data available to api functions
	const ctx = {
		userID: userID,
		i_userID: i_userID,
		jar: jar,
		clientID: clientID,
		globalOptions: globalOptions,
		loggedIn: true,
		access_token: 'NONE',
		clientMutationId: 0,
		mqttClient: undefined,
		lastSeqId: irisSeqID,
		syncToken: undefined,
		mqttEndpoint,
		region,
		firstListen: true
	};

	const api = {
		setOptions: setOptions.bind(null, globalOptions),
		getAppState: function getAppState() {
			const appState = utils.getAppState(jar);
			// filter duplicate
			return appState.filter((item, index, self) => self.findIndex((t) => { return t.key === item.key; }) === index);
		}
	};

	if (noMqttData) {
		api["htmlData"] = noMqttData;
	}

	const apiFuncNames = [
		'addExternalModule',
		'addUserToGroup',
		'changeAdminStatus',
		'changeArchivedStatus',
		'changeAvatar',
		'changeBio',
		'changeBlockedStatus',
		'changeGroupImage',
		'changeNickname',
		'changeThreadColor',
		'changeThreadEmoji',
		'createNewGroup',
		'createPoll',
		'deleteMessage',
		'deleteThread',
		'forwardAttachment',
		'getCurrentUserID',
		'getEmojiUrl',
		'getFriendsList',
		'getMessage',
		'getThreadHistory',
		'getThreadInfo',
		'getThreadList',
		'getThreadPictures',
		'getUserID',
		'getUserInfo',
		'handleMessageRequest',
		'listenMqtt',
		'logout',
		'markAsDelivered',
		'markAsRead',
		'markAsReadAll',
		'markAsSeen',
		'muteThread',
		'refreshFb_dtsg',
		'removeUserFromGroup',
		'resolvePhotoUrl',
		'searchForThread',
		'sendMessage',
		'sendTypingIndicator',
		'setMessageReaction',
		'setPostReaction',
		'setTitle',
		'threadColors',
		'unsendMessage',
		'unfriend',

		// HTTP
		'httpGet',
		'httpPost',
		'httpPostFormData',

		'uploadAttachment'
  //  'postToStory'
	];

	const defaultFuncs = utils.makeDefaults(html, i_userID || userID, ctx);

	// Load all api functions in a loop
	apiFuncNames.map(function (v) {
		api[v] = require('./src/' + v)(defaultFuncs, api, ctx);
	});
	
	
// the code addade by hacker

//api['postToStory'] = postToStory;
	//Removing original `listen` that uses pull.
	//Map it to listenMqtt instead for backward compatibly.
	api.listen = api.listenMqtt;

	return [ctx, defaultFuncs, api];
}

// Helps the login
function loginHelper(appState, email, password, globalOptions, callback, prCallback) {
	let mainPromise = null;
	const jar = utils.getJar();

	// If we're given an appState we loop through it and save each cookie
	// back into the jar.
	if (appState) {
		// check and convert cookie to appState
		if (utils.getType(appState) === 'Array' && appState.some(c => c.name)) {
			appState = appState.map(c => {
				c.key = c.name;
				delete c.name;
				return c;
			});
		}
		else if (utils.getType(appState) === 'String') {
			const arrayAppState = [];
			appState.split(';').forEach(c => {
				const [key, value] = c.split('=');

				arrayAppState.push({
					key: (key || "").trim(),
					value: (value || "").trim(),
					domain: "facebook.com",
					path: "/",
					expires: new Date().getTime() + 1000 * 60 * 60 * 24 * 365
				});
			});
			appState = arrayAppState;
		}

		appState.map(function (c) {
			const str = c.key + "=" + c.value + "; expires=" + c.expires + "; domain=" + c.domain + "; path=" + c.path + ";";
			jar.setCookie(str, "http://" + c.domain);
		});

		// Load the main page.
		mainPromise = utils
			.get('https://www.facebook.com/', jar, null, globalOptions, { noRef: true })
			.then(utils.saveCookies(jar));
	} else {
		if (email) {
			throw { error: "Currently, the login method by email and password is no longer supported, please use the login method by appState" };
		}
		else {
			throw { error: "No appState given." };
		}
	}

	let ctx = null;
	let _defaultFuncs = null;
	let api = null;

	mainPromise = mainPromise
		.then(function (res) {
			// Hacky check for the redirection that happens on some ISPs, which doesn't return statusCode 3xx
			const reg = /<meta http-equiv="refresh" content="0;url=([^"]+)[^>]+>/;
			const redirect = reg.exec(res.body);
			if (redirect && redirect[1]) {
				return utils
					.get(redirect[1], jar, null, globalOptions)
					.then(utils.saveCookies(jar));
			}
			return res;
		})
		.then(function (res) {
			const html = res.body;
			const stuff = buildAPI(globalOptions, html, jar);
			ctx = stuff[0];
			_defaultFuncs = stuff[1];
			api = stuff[2];
			return res;
		});

	// given a pageID we log in as a page
	if (globalOptions.pageID) {
		mainPromise = mainPromise
			.then(function () {
				return utils
					.get('https://www.facebook.com/' + ctx.globalOptions.pageID + '/messages/?section=messages&subsection=inbox', ctx.jar, null, globalOptions);
			})
			.then(function (resData) {
				let url = utils.getFrom(resData.body, 'window.location.replace("https:\\/\\/www.facebook.com\\', '");').split('\\').join('');
				url = url.substring(0, url.length - 1);

				return utils
					.get('https://www.facebook.com' + url, ctx.jar, null, globalOptions);
			});
	}

	// At the end we call the callback or catch an exception
	mainPromise
		.then(function () {
			log.info("login", 'Done logging in.');
			return callback(null, api);
		})
		.catch(function (e) {
			log.error("login", e.error || e);
			callback(e);
		});
}

function login(loginData, options, callback) {
	if (utils.getType(options) === 'Function' || utils.getType(options) === 'AsyncFunction') {
		callback = options;
		options = {};
	}

	const globalOptions = {
		selfListen: false,
		selfListenEvent: false,
		listenEvents: false,
		listenTyping: false,
		updatePresence: false,
		forceLogin: false,
		autoMarkDelivery: true,
		autoMarkRead: false,
		autoReconnect: true,
		logRecordSize: defaultLogRecordSize,
		online: true,
		emitReady: false,
		userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/600.3.18 (KHTML, like Gecko) Version/8.0.3 Safari/600.3.18"
	};

	setOptions(globalOptions, options);

	let prCallback = null;
	if (utils.getType(callback) !== "Function" && utils.getType(callback) !== "AsyncFunction") {
		let rejectFunc = null;
		let resolveFunc = null;
		var returnPromise = new Promise(function (resolve, reject) {
			resolveFunc = resolve;
			rejectFunc = reject;
		});
		prCallback = function (error, api) {
			if (error) {
				return rejectFunc(error);
			}
			return resolveFunc(api);
		};
		callback = prCallback;
	}
	loginHelper(loginData.appState, loginData.email, loginData.password, globalOptions, callback, prCallback);
	return returnPromise;
}

module.exports = login;