import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=>EditableNumberComponent),
  multi: true
}

@Component({
  selector: 'app-editable-number',
  templateUrl: './editable-number.component.html',
  providers: [VALUE_ACCESSOR],
  styleUrls: ['./editable-number.component.css']
})
export class EditableNumberComponent implements ControlValueAccessor {

  @Input() label : string = "Enter value here"
  @Input() required: boolean = true
  private _value : string = ""
  private preValue : string = ""
  public editing : boolean = false
  public onChange : any = Function.prototype
  public onTouched: any = Function.prototype

  get value():any {
    return this._value
  }

  set value(v: any){
    if(v !== this._value){
      this._value = v
      this.onChange(v)
    }
  }

  writeValue(value: any){
    this._value = value
  }

  public registerOnChange(fn: (_: any)=>{}):void {
    this.onChange = fn
  }

  public registerOnTouched(fn: ()=>{}):void {
    this.onTouched = fn
  }

  onBlur($event: Event){
    this.editing = false
    if(this._value ==""){
      this._value = "NO VALUE AVAILABLE"
    }
  }

  beginEdit(value){
    this.preValue = value
    this.editing = true
  }


}
