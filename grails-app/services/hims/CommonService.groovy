package hims

import grails.transaction.Transactional
import net.sf.dynamicreports.jasper.builder.export.Exporters
import net.sf.dynamicreports.report.builder.component.ComponentBuilder
import net.sf.dynamicreports.report.builder.style.StyleBuilder
import net.sf.dynamicreports.report.constant.HorizontalAlignment
import net.sf.dynamicreports.report.constant.VerticalAlignment
import net.sf.dynamicreports.report.datasource.DRDataSource
import net.sf.jasperreports.engine.JRDataSource

import static net.sf.dynamicreports.report.builder.DynamicReports.*


@Transactional
class CommonService {

    StyleBuilder boldStyle         = stl.style().bold();
    StyleBuilder boldCenteredStyle = stl.style(boldStyle).setHorizontalAlignment(HorizontalAlignment.CENTER);
    StyleBuilder titleStyle = stl.style(boldCenteredStyle).setVerticalAlignment(VerticalAlignment.MIDDLE)

    def generateBill(params){

        def expense = Expense.findById(params.id as long)

        report()
                .highlightDetailEvenRows()
                .columns(
                col.column("Id", "id", type.stringType()).setFixedColumns(2),
                col.column("Hike Title", "hikeTitle", type.stringType()).setFixedColumns(12),
                col.column("Provided Fund", "providedFund", type.stringType()).setFixedColumns(8),
                col.column("Breakfast", "breakfast", type.stringType()).setFixedColumns(8),
                col.column("Snacks", "snacks", type.stringType()).setFixedColumns(8),
                col.column("Dinner", "dinner", type.stringType()).setFixedColumns(8),
                col.column("Transportation.", "transportation", type.stringType()).setFixedColumns(8),
                 )
                .columnHeader(cmp.verticalGap(5))
                .setDataSource(dataSource(params))
                .title(
                headComponent("Hiking Expense Bill")
                )
                .toPdf(Exporters.pdfExporter("Bills/${expense.hike.title}${expense.hike.id}.pdf"))


    }

    private JRDataSource dataSource(params){

        def expense = Expense.findById(params.id as long)

        DRDataSource dataS = new DRDataSource("id", "hikeTitle", "providedFund","breakfast","snacks","dinner","transportation");

        dataS.add(
            expense.id.toString(),
            expense.hike.title.toString(),
            expense.providedBudget.toString(),
            expense.breakfast.toString(),
            expense.snacks.toString(),
            expense.dinner.toString(),
            expense.transportation.toString(),
        )

        return dataS;

    }


    private ComponentBuilder headComponent(String titleName){
        return cmp.horizontalList()
                .add(
                cmp.text(titleName).setStyle(titleStyle).setHorizontalAlignment(HorizontalAlignment.LEFT),
                cmp.text(new Date()).setStyle(titleStyle).setHorizontalAlignment(HorizontalAlignment.RIGHT))
                .newRow()
                .add(cmp.filler().setStyle(stl.style().setTopBorder(stl.pen2Point())).setFixedHeight(10));
    }
}
