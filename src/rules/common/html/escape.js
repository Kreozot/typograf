Typograf.rule({
    title: 'Экранирование HTML',
    name: 'common/html/escape',
    sortIndex: 10,
    queue: 'end',
    func: function(text) {
        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;',
            '/': '&#x2F;'
        };

        return text.replace(/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        });
    },
    enabled: false
});