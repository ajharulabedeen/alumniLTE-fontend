export class Divisions {
  private id: String;
  private name: String;


    /**
     * Getter $name
     * @return {String}
     */
	public get $name(): String {
		return this.name;
	}


    /**
     * Setter $name
     * @param {String} value
     */
	public set $name(value: String) {
		this.name = value;
	}

    /**
     * Getter $id
     * @return {String}
     */
	public get $id(): String {
		return this.id;
	}

  /**
     * Setter $id
     * @param {String} value
     */
	public set $id(value: String) {
		this.id = value;
	}

}
