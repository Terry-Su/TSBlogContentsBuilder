import { ALL, BLOG } from "../names"
import { Config } from "../../typings/Config"
import { NEWEST_BLOGS_COUNT } from "../numbers"
import {
  TOP_DIRECTORY_NAME,
  NAME_NEWEST_BLOGS_COUNT,
  NAV_SCRIPTS,
  DETAIL_SCRIPTS,
  NAV_HTML_TITLE,
  NAME_OF_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML
} from "../configNames"

export const DEFAULT_CONFIG: Config = {
  [ NAV_HTML_TITLE ]         : BLOG,
  [ TOP_DIRECTORY_NAME ]     : ALL,
  [ NAME_NEWEST_BLOGS_COUNT ]: NEWEST_BLOGS_COUNT,
  [ NAV_SCRIPTS ]            : [],
  [ DETAIL_SCRIPTS ]         : [],
  [ NAME_OF_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML ]       : null
}
