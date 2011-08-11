<script>
    <div class="${klass.form}">
        <form>
    
            <ul class="${klass.freq}">
                <li>
                    <input type="radio"
                           ref=".${klass.freq_daily}"
                           name="${field.freq_name}"
                           value="${field.freq_daily_value}" />
                    <label>${i18n.freq_daily}</label>
                </li>
                <li>
                    <input type="radio"
                           ref=".${klass.freq_weekly}"
                           name="${field.freq_name}"
                           value="${field.freq_weekly_value}" />
                    <label>${i18n.freq_weekly}</label>
                </li>
                <li>
                    <input type="radio"
                           ref=".${klass.freq_monthly}"
                           name="${field.freq_name}"
                           value="${field.freq_monthly_value}" />
                    <label>${i18n.freq_monthly}</label>
                </li>
                <li>
                    <input type="radio"
                           ref=".${klass.freq_yearly}"
                           name="${field.freq_name}"
                           value="${field.freq_yearly_value}" />
                    <label>${i18n.freq_yearly}</label>
                </li>
            </ul>
    
            <div class="${klass.freq_options}">
    
                <div class="${klass.freq_daily}">
                    <span>${i18n.daily_interval}<span>
                    <input type="text" size="2"
                        value="${field.daily_interval_value}"
                        name="${field.daily_interval_name}"/>
                </div>
    
                <div class="${klass.freq_weekly}">
                    <span>${i18n.weekly_interval}<span>
                    <input type="text" size="2"
                        value="${field.weekly_interval_value}"
                        name="${field.weekly_interval_name}" />
                    <ul>
                    {{each i18n.weekdays}}
                        <li>
                            <input type="checkbox"
                                   name="${field.weekly_weekdays_name}_${weekdays[$index]}"
                                   value="${weekdays[$index]}" />
                            <label>${$value}</label>
                        </li>
                    {{/each}}
                    </ul>
                </div>
    
                <div class="${klass.freq_monthly}">
                    <ul>
                        <li>
                            <input
                                type="radio"
                                value="${field.monthly_day_of_month_value}"
                                name="${field.monthly_type_name}" />
                            <span>${i18n.monthly_day_of_month}</span>
                            <select name="${field.monthly_day_of_month_day_name}">
                            {{each [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
                                    18,19,20,21,22,23,24,25,26,27,28,29,30,31]}}
                                <option value="${$value}">${$value}</option>
                            {{/each}}
                            </select>
                            <input type="text" size="2"
                                value="${field.monthly_day_of_month_interval_value}" 
                                name="${field.monthly_day_of_month_interval_name}"/>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="${field.monthly_weekday_of_month_value}"
                                name="${field.monthly_type_name}" />
                            <span>${i18n.monthly_weekday_of_month}</span>
                            <!-- TODO: could it be multiselect? -->
                            <select name="${field.monthly_weekday_of_month_index_name}">
                            {{each i18n.order_indexes}}
                                <option value="${order_indexes[$index]}">${$value}</option>
                            {{/each}}
                            </select>
                            <select name="${field.monthly_weekday_of_month_name}">
                            {{each i18n.weekdays}}
                                <option value="${weekdays[$index]}">${$value}</option>
                            {{/each}}
                                <option value="${field.yearly_weekday_of_month_weekday_value}">
                                    ${i18n.yearly_weekday_of_month_weekday}</option>
                                <option value="${field.yearly_weekday_of_month_weekend_day_value}">
                                    ${i18n.yearly_weekday_of_month_weekend_day}</option>
                            </select>
                            </select>
                            <input type="text" size="2"
                                value="${field.monthly_weekday_of_month_interval_value}"
                                name="${field.monthly_weekday_of_month_interval_name}" />
                        </li>
                    </ul>
                </div>
    
                <div class="${klass.freq_yearly}">
                    <ul>
                        <li>
                            <input
                                type="radio"
                                value="${field.yearly_day_of_month_value}"
                                name="${field.yearly_type_name}" />
                            <span>${i18n.yearly_day_of_month}</span>
                            <select name="${field.yearly_day_of_month_name}">
                            {{each months}}
                                <option value="${$index+1}">${$value}</option>
                            {{/each}}
                            </select>
                            <select name="${field.yearly_day_of_month_index_name}">
                            {{each [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
                                    18,19,20,21,22,23,24,25,26,27,28,29,30,31]}}
                                <option value="${$value}">${$value}</option>
                            {{/each}}
                            </select>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="${field.yearly_weekday_of_month_value}"
                                name="${field.yearly_type_name}" />
                            <span>${i18n.yearly_weekday_of_month}</span>
                            <select name="${field.yearly_weekday_of_month_index_name}">
                            {{each i18n.order_indexes}}
                                <option value="${order_indexes[$index]}">${$value}</option>
                            {{/each}}
                            </select>
                            <select name="${field.yearly_weekday_of_month_name}">
                            {{each i18n.weekdays}}
                                <option value="${weekdays[$index]}">${$value}</option>
                            {{/each}}
                                <option value="${field.yearly_weekday_of_month_weekday_value}">
                                    ${i18n.yearly_weekday_of_month_weekday}</option>
                                <option value="${field.yearly_weekday_of_month_weekend_day_value}">
                                    ${i18n.yearly_weekday_of_month_weekend_day}</option>
                            </select>
                            <select name="${field.yearly_weekday_of_month_month_name}">
                            {{each months}}
                                <option value="${$index+1}">${$value}</option>
                            {{/each}}
                            </select>
                        </li>
                    </ul>
                </div>
    
            </div>
    
            <div class="${klass.clear}"><!-- --></div>
    
            <div class="${klass.range}">
                <label>${i18n.range_label}</label>
                <ul>
                    <li>
                        <input
                            type="radio"
                            value="${field.range_no_end}"
                            name="${field.range_type}" />
                        <div>${i18n.range_no_end_label}</div>
                    </li>
                    <li>
                        <input
                            type="radio"
                            value="${field.range_by_ocurrences}"
                            name="${field.range_type}" />
                        <div>
                            <span>${i18n.range_by_occurences_label}</span>
                            <input
                                type="text" size="3"
                                value="${field.range_by_ocurrences_value}"
                                name="{field.range_type" />
                        </div>
                    </li>
                    <li>
                        <input
                            type="radio"
                            value="${field.range_by_end_date}"
                            name="${field.range_type}" />
                        <div>
                            <span>${i18n.range_by_end_date}</span>
                            {{tmpl({day_name: field.range_by_end_date_day_name,
                                    day_value: field.range_by_end_date_day_value,
                                    month_name: field.range_by_end_date_month_name,
                                    month_value: field.range_by_end_date_month_value,
                                    year_name: field.range_by_end_date_year_name,
                                    year_value: field.range_by_end_date_year_value,
                                    calendar_name: field.range_by_end_date_calendar_name,
                                    months: i18n.months}) template.dateinput}}
                        </div>
                    </li>
                </ul>
            </div>
    
            <div class="${klass.clear}"><!-- --></div>
    
            <div class="${klass.buttons}">
                <input
                    type="submit"
                    class="${klass.cancel_button}"
                    value="${i18n.cancel_button_label}" />
                <input
                    type="submit"
                    class="${klass.save_button}"
                    value="${i18n.save_button_label}" />
            </div>
        </form>
    </div>
</script>