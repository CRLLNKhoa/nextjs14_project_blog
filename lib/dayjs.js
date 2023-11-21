import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import "dayjs/locale/vi"

// Load plugin relativeTime
dayjs.extend(relativeTime).locale("vi");

export default dayjs;