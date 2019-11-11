import kendo from '@progress/kendo-ui';

export default {
    name: "user-item",
    data() {
        return {
            rowTemplate: this.generateRowTemplate(),
            altRowTemplate: this.generateAltRowTemplate()
        }
    },
    methods: {
        generateRowTemplate: function() {
            var template =
                '<tr data-uid="#: uid #">' +
                    '<td class="details">' +
                        '<span class="name">#: FirstName# #: LastName# </span>' +
                        '<span class="title">Title: #: Title #</span>' +
                    '</td>' +
                    '<td class="country">' +
                        '#: Country #' +
                    '</td>' +
                    '<td class="employeeID">' +
                        '#: EmployeeID #' +
                    '</td>' +
                '</tr>'

            return kendo.template(template);
        },
        generateAltRowTemplate: function() {
            var template =
                '<tr class="k-alt" data-uid="#: uid #">' +
                    '<td class="details">' +
                        '<span class="name">#: FirstName# #: LastName# </span>' +
                        '<span class="title">Title: #: Title #</span>' +
                    '</td>' +
                    '<td class="country">' +
                        '#: Country #' +
                    '</td>' +
                    '<td class="employeeID">' +
                        '#: EmployeeID #' +
                    '</td>' +
                '</tr>'

            return kendo.template(template);
        }
    }
}