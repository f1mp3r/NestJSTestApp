import * as moment from 'moment';

export type Moment = (inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, language?: string, strict?: boolean) => moment.Moment;
