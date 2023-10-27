import type { Schedule } from './Schedule';

export function createTimetable(
	schedule: Schedule,
	buttonLabel: string
): string[] {
	return schedule.timetable.map(
		( row ) =>
			`<div class="qms4__block__timetable__timetable-body-row">
			<div class="qms4__block__timetable__timetable-body-time">${ row.label }</div>
			<div class="qms4__block__timetable__timetable-body-capacity">${
				row.capacity
			}</div>
			<div class="qms4__block__timetable__timetable-body-entry">
				<p class="qms4__block__timetable__timetable-body-comment">${ row.comment }</p>
				<div class="qms4__block__timetable__timetable-body-button">
					${ row.available ? `<a href="#">${ buttonLabel }</a>` : '' }
				</div>
			</div>
		</div>`
	);
}
